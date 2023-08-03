function RegForm(){
    return(
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Log-in</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row g-4 align-items-center">
                        <label for="usermail" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="usermail" placeholder="name@example.com"/>
                    </div>
                    <div class="row g-3 align-items-center">
                        <div class="col-auto">
                            <label for="inputPassword" class="col-form-label">Password</label>
                        </div>
                        <div class="col-auto">
                            <input type="password" id="inputPassword" class="form-control" aria-describedby="passwordHelpInline"/>
                        </div>
                        <div class="col-auto">
                            <span id="passwordHelpInline" class="form-text">
                            Must be 8-20 characters long.
                            </span>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Submit</button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default RegForm;