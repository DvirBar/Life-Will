export const Validate = function (func, formikProps, currStage) {
	//TODO: assigned to Andrey
	console.log(`validation callback : ${func}`);
	console.log(`validation formikProps`);
	console.log(formikProps);
	console.log(`validation stage : ${currStage}`);
	if (currStage === null)
		func();
	else
		func(currStage);
}