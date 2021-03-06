import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const ProjectDetails = (props) => {
	const { match, history, location, project } = props;
	console.log(project);
	const id = match.params.id;

	return project ? (
		<div className='container section project-details'>
			<div className='card z-depth-0'>
				<div className='card-content'>
					<span className='card-title'>
						{project.title} - {id}
					</span>
					<p>{project.content}</p>
				</div>
				<div className='card-action grey lighten-4 grey-text'>
					<div>
						Posted By {project.authorFirstName} {project.authorLastName}
					</div>
					<div>2nd September, 2am</div>
				</div>
			</div>
		</div>
	) : (
		<div className='container center'>
			<p>Loading Project</p>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id;
	const projects = state.firestore.data.projects;
	const project = projects ? projects[id] : null;
	return {
		project: project,
	};
};

export default compose(
	connect(mapStateToProps),
	firestoreConnect((props) => {
		return [{ collection: 'projects' }];
	})
)(ProjectDetails);
