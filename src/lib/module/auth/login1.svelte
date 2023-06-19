<script>
  import { onMount } from "svelte";
  import { login, loader, error } from "$lib/module/auth/store.js";
  import { register } from "$lib/module/auth/storeRegister.js";

  let modalLogin;
  let modalRegister;
  let modal;
  let modalR;
  let loginForm;
  let registerForm;
  let userData;
  let regisData;

  onMount(() => {
    modalLogin = new bootstrap.Modal(modal);
    modalRegister = new bootstrap.Modal(modalR);
    // modalLogin.show();
  });

  const submitLogin = () => {
    let formData = new FormData(loginForm);

    userData = Object.fromEntries(formData.entries());
    console.log(userData);
    login.set(userData);

    // loginForm.reset();
    modalLogin.hide();
  };

  const submitRegister = () => {
    let formData = new FormData(registerForm);

    regisData = Object.fromEntries(formData.entries());
    console.log(regisData);
    register.set(regisData);

    // loginForm.reset();
    modalRegister.hide();
  };
</script>

{#if $login.isLogin}
  <button class="btn btn-danger" on:click={() => login.clear()}>Logout</button>
{:else}
  <button class="btn btn-default" on:click={() => modalLogin.show()}>
    Login
  </button>
  <button class="btn btn-default" on:click={() => modalRegister.show()}>
    Register
  </button>
{/if}
<div class="modal" tabindex="-1" bind:this={modal}>
  <div class="modal-dialog">
    <form on:submit|preventDefault={submitLogin} bind:this={loginForm}>
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Login</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div class="modal-body">
          <div class="d-flex flex-column gap-2">
            <input
              type="text"
              placeholder="Enter Username"
              name="username"
              class="form-control"
              required
            />
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              required
              class="form-control"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal">Close</button
          >
          <button type="submit" class="btn btn-primary" disabled={$loader}
            >Login</button
          >
        </div>
      </div>
    </form>
  </div>
</div>

<div class="modal fade" tabindex="-1" bind:this={modalR}>
  <div
    class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg"
    role="document"
  >
    <form on:submit|preventDefault={submitRegister} bind:this={registerForm}>
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalTitleId">Register</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12 col-md-6 mb-3">
                <label for="Last" class="form-label">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="Last"
                  placeholder="Input your Last Name"
                  name="lastname"
                />
              </div>
              <div class="col-12 col-md-6 mb-3">
                <label for="First" class="form-label">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="First"
                  name="firstname"
                  placeholder="Input your First Name"
                />
              </div>
              <div class="col-12 col-md-6 mb-3">
                <label for="Middle" class="form-label">Middle Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="Middle"
                  placeholder="Input your Middle Name"
                  name="middlename"
                />
              </div>
              <div class="clearfix" />
              <div class="col-12 mb-3">
                <label for="Address" class="form-label">Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="Address"
                  placeholder="Input your Address"
                  name="address"
                />
              </div>
              <div class="col-12 col-md-6 mb-3">
                <label for="Username" class="form-label">Username</label>
                <input
                  type="text"
                  class="form-control"
                  id="Username"
                  placeholder="Input your Username"
                  name="username"
                />
              </div>
              <div class="col-12 col-md-6 mb-3">
                <label for="Password" class="form-label">Password</label>
                <input
                  type="password"
                  id="Password"
                  class="form-control"
                  aria-labelledby="passwordHelpBlock"
                  placeholder="Input your Password"
                  name="password"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer justify-content-center">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal">Close</button
          >
          <button type="submit" class="btn btn-primary">Register</button>
        </div>
      </div>
    </form>
  </div>
</div>
