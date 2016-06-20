import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
  constructor(props,context){
    super(props,context);
    //    this.onTitleChange = this.noTitleChange.bind(this);
      //  this.onClickSave = this.onClickSave.bind(this);
    this.state = {
      course: {title:""}
    };


  }


  noTitleChange(event){
    console.log(event.target.value);
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course:course});
  }

  noClickSave(){
  //    console.log('save btn');
      this.props.actions.createCourse(this.state.course);
  }

  courseRow(course, index){
    return <div key={index} >{course.title}</div>;
  }

  render() {
    const {courses} = this.props;

     return(
       <div>
        <h1>Courses</h1>
       <CourseList courses={courses} />
        <h2>Add Course</h2>
        <input
          type="text"
           onChange={this.noTitleChange.bind(this)} />

        <input
              type="submit"
              value = "Save"
              onClick={this.noClickSave.bind(this)} />

       </div>
     );
  }
}

CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(courseActions,dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage);
