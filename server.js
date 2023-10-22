const express = require('express');
const expressLayouts = require('express-ejs-layouts')
const app = express();
const port = process.env.PORT || 3000;

app.use(expressLayouts);

app.set('view engine', 'ejs');
// defining custom dir for views
app.set('views', 'custom');

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Index',
        fruitsArray: [
            "Jatin",
            "Shaurya",
            "Alice",
            "John"
        ],
        profileObject: {
            name: 'John',
            dob: '23-05-2000',
            email: 'john@example.com',
            phone: '+91 6395062862',
        },
        contactProfiles: [
            {
                name: 'akash1',
                dob: '23-05-2000',
                email: 'akash@example.com',
                phone: '+91 6395062862',
            },
            {
                name: 'akash2',
                dob: '23-05-2000',
                email: 'akash@example.com',
                phone: '+91 6395062862',
            },
            {
                name: 'akash3',
                dob: '23-05-2000',
                email: 'akash@example.com',
                phone: '+91 6395062862',
            },
            {
                name: 'akash4',
                dob: '23-05-2000',
                email: 'akash@example.com',
                phone: '+91 6395062862',
            },
        ],
        objectExmaples: {
            'item1': {
                name: 'John1',
                dob: '23-05-2000',
                email: 'john1@example.com',
                phone: '+91 6395062862',
            },
            'item2': {
                name: 'John2',
                dob: '23-05-2000',
                email: 'john2@example.com',
                phone: '+91 6395062862',
            },
            'item3': {
                name: 'John3',
                dob: '23-05-2000',
                email: 'john3@example.com',
                phone: '+91 6395062862',
            },
            'item4': {
                name: 'John4',
                dob: '23-05-2000',
                email: 'john4@example.com',
                phone: '+91 6395062862',
            },
            'item5': {
                name: 'John5',
                dob: '23-05-2000',
                email: 'john4@example.com',
                phone: '+91 6395062862',
            },
        }
    });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
})


app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
})