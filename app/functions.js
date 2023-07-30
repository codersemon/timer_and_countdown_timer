/**
 * 
 * @param {*} msg - message to show
 * @param {*} type - alert type 
 * @returns dismissible alert
 */
function createAlert(msg, type = 'danger'){
    return `<div
    class="alert alert-${type} alert-dismissible fade show"
    role="alert"
  >
    ${msg}
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    ></button>
  </div>`
}

/**
 * 
 * @param {*} input - taking input value
 * @returns true if number else false
 */
function isNumber(input){
    const pattern = /^[0-9]{0,}$/;
    return pattern.test(input);
}