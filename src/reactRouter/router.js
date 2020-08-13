import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router';
import MainPage from '../pages/MainPage';
import Documents from '../pages/documents';
import AboutEGE from '../pages/aboutEGE';
import AboutAdditionalProffessionalEducation from '../pages/AboutAdditionalProffessionalEducation';
import ManagerOfPersonal from '../pages/ProfessionalEducation/managerOfPersonal';
import HRInspector from '../pages/ProfessionalEducation/HRInspector';
import ManagerOfAccountant from '../pages/ProfessionalEducation/ManagerOfAccountant';
import SchoolEducationClass11 from '../pages/SchoolEducation/Class11';
import SchoolEducationClass9 from '../pages/SchoolEducation/Class9';
import SchoolEducationClass10 from '../pages/SchoolEducation/Class11';
import SchoolEducationClass5to8 from '../pages/SchoolEducation/Class11';
import CourseOfBeauty from '../pages/CourseOfBeauty';
import BeautyBrowists from '../pages/Beauty/Browists';
import BeautyHairdresser from '../pages/Beauty/Hairdresser';
import BeautyManicure from '../pages/Beauty/Manicure';

function ReactRouter() {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/documents" component={Documents} />
      <Route path="/AboutEGE" component={AboutEGE} />
      <Route
        exact
        path="/AboutAdditionalProffessionalEducation"
        component={AboutAdditionalProffessionalEducation}
      />
      <Route
        exact
        path="/AboutAdditionalProffessionalEducation/ManagerOfPersonal"
        component={ManagerOfPersonal}
      />
      <Route
        exact
        path="/AboutAdditionalProffessionalEducation/HRManager"
        component={HRInspector}
      />
      <Route
        exact
        path="/AboutAdditionalProffessionalEducation/ManagerOfAccountant"
        component={ManagerOfAccountant}
      />
      <Route exact path="/SchoolEducation/Class11" component={SchoolEducationClass11} />
      <Route exact path="/SchoolEducation/Class9" component={SchoolEducationClass9} />
      <Route exact path="/SchoolEducation/Class10" component={SchoolEducationClass10} />
      <Route exact path="/SchoolEducation/Class5to8" component={SchoolEducationClass5to8} />
      <Route exact path="/CourseOfBeauty" component={CourseOfBeauty} />
      <Route exact path="/CourseOfBeauty/Browists" component={BeautyBrowists} />
      <Route exact path="/CourseOfBeauty/Hairdresser" component={BeautyHairdresser} />
      <Route exact path="/CourseOfBeauty/Manicure" component={BeautyManicure} />

      <Redirect from="*" to="/"></Redirect>
    </Switch>
  );
}
//<Route exact path="/404" component={Error404} />
export default ReactRouter;
