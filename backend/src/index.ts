import express from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add APIs
app.use('/printMe', () => console.log('me!'));
app.use('/api', () => console.log('hel'));

app.listen(4000, () => console.log('Gator app listening on port 3000!'));


const hi = "hello";

const testMe = (abc: string) => {
    console.log(abc);
}

testMe(hi);