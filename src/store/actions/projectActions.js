export const createProject = (project) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firestore = getFirestore();
		firestore
			.collection('projects')
			.add({
				...project,
				authorFirstName: 'Paul',
				authorLastName: 'Kim',
				authorId: 12345,
				createdAt: new Date(),
			})
			.then(() => {
				dispatch({ type: 'CREATE_PROJECT', project });
			})
			.catch((e) => {
				dispatch({ type: 'CREATE_PROJECT_ERROR', e });
			});
	};
};
