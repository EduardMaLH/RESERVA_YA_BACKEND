const { supabase } = require('../config/supabase');

class UserController {
    async getUsers(req, res) {
        try {
            const { data, error } = await supabase
                .from('usuarios')
                .select('*');

            if (error) {
                return res.status(400).json({ error: error.message });
            }

            return res.status(200).json(data);
        } catch (err) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = new UserController();