// @desc    Get gaols
// @route   GET /api/goals
// @access  Private
const getGoals = (req, res) => {
    res.status(200).json({ message: 'Get goals' })
}

// @desc    Set gaols
// @route   POST /api/goals
// @access  Private
const setGoal = (req, res) => {
    res.status(200).json({ message: 'Set goal' })
}

// @desc    Update gaols
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` })
}

// @desc    Delete gaols
// @route   DELETE /api/goals
// @access  Private
const deleteGoal = (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` })
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}