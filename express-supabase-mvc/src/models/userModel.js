const { supabase } = require('../config/supabase');

const fetchUsers = async () => {
    const { data, error } = await supabase
        .from('usuarios')
        .select('*');

    if (error) {
        throw new Error(error.message);
    }

    return data;
};

module.exports = { fetchUsers };