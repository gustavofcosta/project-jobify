import express from "express";
const router = express.Router();

import {
  createJob,
  getAllJobs,
  updateJob,
  showStats,
  deleteJob,
} from "../controllers/jobsController.js";

router.route("/").post(createJob).get(getAllJobs);
// route id
router.route("/stats").get(showStats);
router.route("/:id").delete(deleteJob).patch(updateJob);

export default router;
