import express from 'express';
import pgPromise from 'pg-promise';
import bcrypt from "bcryptjs";
import cors from 'cors';
const app = express();
const port = 4200;

// Initialize pg-promise
const pgp = pgPromise();

// Database connection configuration
const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'users',
  user: 'postgres',
  password: '12345678'
});

// Test route to check DB connection

// app.get('/details/:id', async (req, res) => {
//   const { id } = req.params;

//   try {

//     const results = await db.any('SELECT * FROM account WHERE user_id = $1', [id]);
    
//     if (results.length === 0) {
//       return res.status(404).json({ message: 'No account found for this user ID' });
//     }

//     res.json(results);
//   } catch (error) {
//     console.error('Database error:', error);
//     res.status(500).send('Database error');
//   }
// });


//post api call

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // allow your React app
  methods: ['GET', 'POST'],
  credentials: true
}));
app.post('/details', async (req, res) => {
  const {  email, password } = req.body;
  console.log('received data',req.body);
  
  try {
    if(!email && !password){
      return res.json("Fill the required field!!")
    }
    const post = await db.any(
      'select * from account where email = $1',[email]
    );

    if (post.length === 0) {
      return res.status(404).json({ error: 'User not found!!' });
}
    const account = post[0];

    if (account.password !== password) {
      return res.status(401).json({ error: 'Invalid credentials!!' });
}
      return res.json({ message: 'Login successful', user: { email: account.email, id: account.id } });
  
  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).send('Internal server error');
    
  }
});


//PUT API call

// app.use(express.json());
// app.put('/details/:id',async (req,res)=>{
//   const {id} = req.params;
//   const { username, password, email }  = req.body;
//   console.log('received data : ',req.body);
  
//   try {
//      const put = await db.oneOrNone(
//       'update account SET username=$1, password=$2, email=$3 where user_id = $4 RETURNING *',
//       [username, password, email,id]
//     );
//     res.json({message:'user updated successfully',data : put});
//   } catch (error) {
//     console.error('Database error:', error);
//     if (error.code === '23505') {
//       res.status(400).send('Username or email already exists.');
//     } else {
//       res.status(500).send('Internal server error');
//     }
//   }
 
  
// });

// //delete API
// app.delete('/details/:id', async (req,res) => {
//   const {id} = req.params;
//   try {
//     const del = await db.none( 
//       `delete from account where user_id=$1`,[id]
//     );
//     res.json({message:'user deleted successfully',data : del});
//   } catch (error) {
//     console.error('Database error:', error);
//     res.status(500).send('Internal server error');
    
//   }

// })


app.listen(port, () => {
  console.log(` Server is running on http://localhost:${port}`);
});
