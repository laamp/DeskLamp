import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../helper/route_helper";

import NotFound from './not_found_404';
import { SplashComponent } from './splash';
import SignInFormContainer from './session_form/signin_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import OrganizationFormContainer from './organization_form/organization_form_container';
import OrganizationHome from './organization/organization_container';
import HubShowContainer from "./hub_show/hub_show_container";
import MessageBoardShowContainer from "./message_board/message_board_container";
import MessageBoardPostContainer from "./message_board_post/message_board_post_container";
import MessageBoardPostNewContainer from "./message_board_post/message_board_post_new_container";
import TodoListContainer from "./todo_collection/todo_list_collection_container";
import ContactInfoFooter from "./footer";

const App = () => (
  <>
    <Switch>
      <AuthRoute exact path="/signin" component={SignInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />

      <ProtectedRoute exact path="/organizations" component={OrganizationFormContainer} />
      <ProtectedRoute path="/organizations/:organizationId" component={OrganizationHome} />

      <ProtectedRoute path="/hubs/:hubId" component={HubShowContainer} />

      <ProtectedRoute path="/message_boards/:messageBoardId" component={MessageBoardShowContainer} />
      <ProtectedRoute exact path="/message_board_posts/new" component={MessageBoardPostNewContainer} />
      <ProtectedRoute path="/message_board_posts/:messageBoardPostId" component={MessageBoardPostContainer} />

      <ProtectedRoute path="/todo_lists/:todoListCollectionId" component={TodoListContainer} />

      <Route exact path="/" component={SplashComponent} />
      <Route path="*" component={NotFound} />
    </Switch>
    <ContactInfoFooter />
  </>
);

export default App;
