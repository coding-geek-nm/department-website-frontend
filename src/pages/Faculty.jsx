// Faculty.js
import React from 'react';
import Card from '../components/Card';
import './Faculty.css'; // Import CSS file for styling

function Faculty() {
    return (
        <div className="faculty_container">
            <div className="faculty_content">
                <h1>FACULTY</h1>
            </div>
            <div className="card_content">
                <Card
                    title='Hod'
                    img='https://img.freepik.com/free-photo/amazing-cheerful-business-woman-standing-with-arms-crossed_171337-8487.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1708387200&semt=aiss'
                    name='Nagaratna'
                />
                <Card
                    title='professor'
                    img='https://img.freepik.com/free-photo/woman-with-crossed-arms_23-2147574177.jpg?1&w=1060&t=st=1708432087~exp=1708432687~hmac=d504a2ce5658eecd710bcb6a27d8f789aee79627b5fe4ea54f8948fdfbffac0d'
                    name='Krupa'
                />
                <Card
                    title='professor'
                    img='https://img.freepik.com/free-photo/smiley-businesswoman-posing-outdoors-with-arms-crossed-copy-space_23-2148767055.jpg?t=st=1708432153~exp=1708432753~hmac=6cac3907587a390921710e8be5cd080033484ba098360f283d84790db2d56c98'
                    name='manjula'
                />
            </div>
        </div>
    );
}

export default Faculty;
