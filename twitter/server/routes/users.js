import express from "express";
import {
    getUser,
    getUserFriends,
    addRemoveFriend,
} from "../controllers/users.js";

import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// READ
router.get("/:id", verifyToken, getUser); // Updated route for fetching user data by ID
router.get("/:id/friends", verifyToken, getUserFriends); // Route for fetching user's friends

// Update
router.patch("/:id/:friendId", verifyToken, addRemoveFriend); // Route for adding/removing friend

export default router;