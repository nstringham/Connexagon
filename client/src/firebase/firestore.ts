import { getFirestore, collection, CollectionReference } from "firebase/firestore";
import { app } from "./firebase";
import { Game, Queue, UserData } from "../../../functions/src/types";

const db = getFirestore(app);

export const gamesCollection = collection(db, "games") as CollectionReference<Game>;

export const queuesCollection = collection(db, "queues") as CollectionReference<Queue>;

export const usersCollection = collection(db, "users") as CollectionReference<UserData>;
