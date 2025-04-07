import PropTypes from 'prop-types';

function Student(props) {
  return (
    <div className="student">
      <p>My name is: {props.name} and age = {props.age}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "yes" : "no"}</p>
      <hr />
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool
};

export default Student;
