import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, get, set, remove } from "firebase/database";
import { v4 as uuid } from 'uuid';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DB_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export function login() {
  signInWithPopup(auth, provider).catch(console.error); 
}

export function logout() {
  signOut(auth).catch(console.error);
}

export function onUserStateChange(callback) {
  onAuthStateChanged(auth, async (user) => {
    /**
     * 1. 사용자가 있는 경우에(로그인 한 경우)
     */
    const updateUser = user ? await adminUser(user) : null;
    callback(updateUser);
  });
}

async function adminUser(user) {
  /**
 * 2. 사용자가 어드민 권한을 가지고 있는지 확인
 */
  return get(ref(database, 'admins'))
    .then((snapshot) => {
      if(snapshot.exists()) {
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin }
      }
      return user;
    })
}

export async function addNewProduct(product, image) {
  const id = uuid();
  return set(ref(database, `products/${id}`), {
    ...product,
    id,
    price: parseInt(product.price),
    image,
    options: product.options.split(',')
  })
}

export async function getProducts() {
  return get(ref(database, 'products')).then(snapshot => {
    if(snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  })
}

export async function getCart(userId) {
  return get(ref(database, `carts/${userId}`))
    .then(snapshot => {
      const items = snapshot.val() || {};
      return Object.values(items);
    })
}

export async function addOrUpdateToCart(userId, product) {
  return set(ref(database, `carts/${userId}/${product.id}`), product);
}

export async function removeFromCart(userId, productId) {
  return remove(ref(database, `carts/${userId}/${productId}`));
}