type AlertType = 'success' | 'danger' | 'warning';

function setAlert(type: AlertType) {
  // ...
  console.log(type);
}

setAlert('success');
setAlert('danger');
// setAlert('default');
