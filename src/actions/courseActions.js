import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';




export function loadCoursesSuccess(courses){
  return { type:types.LOAD_COURSES_SUCCESS, courses};
}

export function createCoursesSuccess(course){
  return { type:types.CREATE_COURSES_SUCCESS, course};
}

export function updateCoursesSuccess(course){
  return { type:types.UPDATE_COURSES_SUCCESS, course};
}

export function loadCourses(){
    return function(dispatch){
      return courseApi.getAllCourses().then(courses =>{
        dispatch(loadCoursesSuccess(courses));
      }).catch(err =>{
        throw(err);
      });
    };
}

export function saveCourse(course){
    return function(dispatch){
      return courseApi.saveCourse(course).then(savedCourse =>{
          course.id ? dispatch(updateCoursesSuccess(savedCourse)):
          dispatch(createCoursesSuccess(savedCourse));
      }).catch(err =>{
        throw(err);
      });
    };
}
