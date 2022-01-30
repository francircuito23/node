const { Router } = require('express');
const router = Router();
 
//Raiz
router.get('/rutas', (req, res) => {    
    res.json(
        {
            "Title": "Hola mundito usando rutas!"
        }
    );
})
 
module.exports = router;