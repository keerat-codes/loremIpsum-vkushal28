
// Auto-generated by AutoPilot on 28-07-2023 at 23:46:56

const express = require('express');
const router = express.Router();

// GET API to generate cube from a number
router.get('/asdas', (req, res) => {
    let number = req.query.number;
    //Check if number is not empty
    if(number !== ''){
        let cube = number**3;
        res.status(200).json({
            'result': cube
        });
    } else {
        res.status(500).json({
            'error': 'Encountered an error'
        });
    }
});

module.exports = router;