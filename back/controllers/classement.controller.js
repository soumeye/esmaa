const Equipe = require("../models/group.model");
const Challenge = require("../models/challeng.model");
const Evaluation = require("../models/evaluation.model");
const Soumission = require("../models/Soumission.model");


const mongoose = require("mongoose");


// This function calculates the average scores and rankings of teams
async function calculateTeamRankings() {
  try {
    // Fetch all submissions
    const submissions = await Soumission.find().populate('evaluations');
    
    // Object to store team scores and count of scores
    let teamScores = {};

    // Iterate over each submission to compute scores
    for (const submission of submissions) {
      const evaluations = await Evaluation.find({ soumissionId: submission._id });

      for (const evaluation of evaluations) {
        const teamId = submission.equipeId.toString();
        if (!teamScores[teamId]) {
          teamScores[teamId] = { sum: 0, count: 0 };
          }
          
        // Sum all scores from evaluations
        evaluation.notes.forEach(note => {
          teamScores[teamId].sum += note.note;
          teamScores[teamId].count++;
        });
          
      }
    }

    // Convert sums to averages and prepare the final scores array
    const scores = Object.keys(teamScores).map(teamId => ({
      teamId: teamId,
      averageScore: teamScores[teamId].sum / teamScores[teamId].count
    }));

    // Sort teams by averageScore in descending order
    scores.sort((a, b) => b.averageScore - a.averageScore);

    return scores;
  } catch (error) {
    console.error("Failed to calculate team rankings", error);
    throw error;
  }
}



module.exports = calculateTeamRankings;
