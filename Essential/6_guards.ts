type AlertType = 'success' | 'danger' | 'warning';

type Wer = 'a/a' | 'b/b';

function setAlert1(type: Wer) {
  // ...
  console.log(type);
}

setAlert1('a/a');

function setAlert(type: AlertType) {
  // ...
  console.log(type);
}

setAlert('success');
setAlert('danger');
// setAlert('default');
