import React from 'react';

const AddCourse = () => {
    const handleAddCourse = (event) => {
        event.preventDefault();
        const heading = event.target.heading.value;
        const img_url = event.target.img_url.value;
        const price = event.target.price.value;
        const weeks = event.target.weeks.value;
        const level = event.target.level.value;
        const lesson = event.target.lesson.value;
        const quiz = event.target.quiz.value;
        const students = event.target.students.value;
        const description = event.target.description.value;
    
        // const course = { heading };
        const course = { heading, img_url, price, weeks, level, lesson, quiz, students, description };
    
        //send data to the server
        fetch("http://localhost:5000/course", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(course),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("success", data);
            alert('Course added successfully');
            // event.target.reset();
          });
      };
    return (
        <div className="contact-style">
      
      <form  onSubmit={handleAddCourse} id="contact" className='form-style'>
      <h2>Please add a new Course</h2>
        <fieldset>
          <input name="heading" placeholder="Course Name" type="text" tabIndex="1" required autoFocus/>
        </fieldset>
        <fieldset>
          <input  name="img_url" placeholder="Image Link" type="text" tabIndex="1" required autoFocus/>
        </fieldset>
        <fieldset>
          <input name="price" placeholder="Course Fee" type="number" className='w-100 mb-1' tabIndex="1" required autoFocus/>
        </fieldset>
        <fieldset>
          <input  name="weeks" placeholder="weeks" type="number" className='w-100 mb-1' tabIndex="2" required/>
        </fieldset>
        <fieldset>
          <input name="level" placeholder="level" type="text" tabIndex="3" required/>
        </fieldset>
        <fieldset>
          <input name="lesson" placeholder="lesson" type="number" className='w-100 mb-1' tabIndex="3" required/>
        </fieldset>
        <fieldset>
          <input name="quiz" placeholder="quiz" type="number" className='w-100 mb-1' tabIndex="3" required/>
        </fieldset>
        <fieldset>
          <input name="students" placeholder="students" type="number" className='w-100 mb-1' tabIndex="3" required/>
        </fieldset>
        <fieldset>
          <textarea name="description" placeholder="Description...." tabIndex="5" required/>
        </fieldset>
        <fieldset>
          <button value="Add course" name="add" type="submit" className="contact-submit" >Course add</button>
        </fieldset>
        <p className="copyright">Designed by <a href="https://edulogy.netlify.app" title="edulogy">Edulogy</a></p>
      </form>
      
    </div>
    );
};

export default AddCourse;