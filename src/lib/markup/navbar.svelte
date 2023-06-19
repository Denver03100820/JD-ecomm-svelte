<script>
  import { onMount } from "svelte";
  import { Ul, Li } from "$lib/component/list";
  import { Link, Button, Input, Label } from "$lib/component/form";
  import ModuleAuthLogin from "$lib/module/auth/login.svelte";
  import ModuleAuthRegister from "$lib/module/accounts/register.svelte";
  import { login, loader, error } from "$lib/module/auth/store.js";
  import { register } from "$lib/module/auth/storeRegister.js";

  export let imgSrc = "";
  import UiIcon from "$lib/component/ui/icon.svelte";
  import UiHr from "$lib/component/ui/hr.svelte";
  import ModuleCart from "$lib/module/cart/cart.svelte";
  import ModuleCartOrder from "$lib/module/cart/order.svelte";
  import Header from "$lib/component/header/header.svelte";
  export let listCategories = [
    { link: "/", name: "Mobile Phones" },
    { link: "/", name: "Mens Dress" },
    { link: "/", name: "Womens Dress" },
  ];

  let modalLogin;
  let modalRegister;
  let modal;
  let modalR;
  let loginForm;
  let registerForm;
  let userData;
  let regisData;
  let formType;

  onMount(() => {
    modalLogin = new bootstrap.Modal(modal);
    modalRegister = new bootstrap.Modal(modalR);
    // modalLogin.show();
  });

  const saveAccount = (data) => {
    if (data) {
      register.set(data);
      registerForm.reset();
      modalRegister.hide();
      regisData = null;
    }
  };

  const submitlogin = (data) => {
    if (data) {
      login.set(data);
      loginForm.reset();
      modalLogin.hide();
      userData = null;
    }
  };

  $: saveAccount(regisData);
  $: submitlogin(userData);
</script>

<header class="d-flex w-100 border-bottom py-2 px-2 px-md-4">
  <a
    href="/"
    class="nav-brand flex-shrink-0 text-decoration-none d-flex ms-3 flex-row align-items-center"
    style="width: 280px;"
  >
    <img src={imgSrc} width="50" alt="logo" />
    <span class="lead fw-bolder ps-4 text-uppercase">LazShopee</span>
  </a>
  <nav class="navbar flex-grow-1">
    <Ul className={"nav w-100 align-items-center"}>
      <Li className={"nav-item d-none d-md-block"}>
        <Link className={"nav-link"} href={"page"}>
          <UiIcon type="solid" name="home" /> &nbsp;Home
        </Link>
      </Li>
      <Li className={"nav-item d-none d-md-block dropdown"}>
        <Link
          className={"nav-link"}
          href={"/"}
          attributes={{
            role: "button",
            "data-bs-toggle": "dropdown",
            "aria-expanded": "false",
          }}
        >
          <UiIcon type="solid" name="list" /> &nbsp;Categories
        </Link>
        <Ul
          className={"dropdown-menu dropdown-menu-end mt-3 rounded-0 opacity-75"}
        >
          {#each listCategories as item}
            <Li>
              <Link className={"dropdown-item"} href={item.link}
                >{item.name}</Link
              >
            </Li>
          {/each}
        </Ul>
      </Li>

      <Li className={"nav-item d-none d-md-flex"}>
        <Input
          className={"form-control me-2"}
          type={"search"}
          placeholder={"Search"}
        />
        <Button className={"btn btn-outline-success ms-2"}
          ><UiIcon type="solid" name="search" /></Button
        >
      </Li>
      <Li className={"ms-auto nav-item d-none d-md-block"}>
        {#if $login.isLogin}
          <Button
            className={"nav-link position-relative"}
            attributes={{
              "data-bs-toggle": "modal",
              "data-bs-target": "#orderModal",
            }}
          >
            <UiIcon type="solid" name="shopping-cart" />
            <span
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              >1</span
            >
          </Button>
          <!-- {$login.data[0].lastname} -->
        {:else}
          <Button
            className={"nav-link position-relative"}
            attributes={{
              "data-bs-toggle": "modal",
              "data-bs-target": "#loginModal",
            }}
          >
            <UiIcon type="solid" name="shopping-cart" />
          </Button>
        {/if}
      </Li>
      {#if $login.isLogin}
        <Li className={"nav-item dropdown"}>
          <Link
            className={"nav-link"}
            href={"/"}
            attributes={{
              role: "button",
              "data-bs-toggle": "dropdown",
              "aria-expanded": "false",
            }}
          >
            <UiIcon type="solid" name="user-circle fa-lg" />
          </Link>
          <Ul
            className={"dropdown-menu dropdown-menu-end mt-3 rounded-0 p-2"}
            style={"min-width: 300px;"}
          >
            <Li
              ><Header
                header={"h6"}
                className={"d-flex text justify-content-center py-2"}
                >{$login.data[0].firstname} {$login.data[0].lastname}
              </Header></Li
            >
            <Li><UiHr className="dropdown-divider" /></Li>
            <Li
              ><Link
                className={"dropdown-item"}
                attributes={{
                  "data-bs-toggle": "modal",
                  "data-bs-target": "#orderModal",
                }}>My Order</Link
              ></Li
            >
            <Li
              ><Link
                className={"dropdown-item"}
                action={() => {
                  modalRegister.show();
                  formType = "update";
                }}>Edit Profile</Link
              ></Li
            >
            <Li
              ><Link className={"dropdown-item"} action={() => login.clear()}
                >Logout</Link
              ></Li
            >
          </Ul>
        </Li>
      {:else}
        <Li className={"nav-item d-none d-md-block"}>
          <Button
            className={"nav-link"}
            action={() => {
              modalLogin.show();
            }}
          >
            <UiIcon type="solid" name="sign-in" /> &nbsp;Login
          </Button>
        </Li>
        <Li className={"nav-item d-none d-md-block"}>
          <Button
            className={"nav-link"}
            action={() => {
              modalRegister.show();
              formType = "add";
            }}
          >
            <UiIcon type="solid" name="user-plus" /> &nbsp;Register
          </Button>
        </Li>
      {/if}

      <Li className={"ms-auto nav-item d-block d-md-none"}>
        <Button
          className={"nav-link"}
          attributes={{
            "data-bs-toggle": "offcanvas",
            "data-bs-target": "#navbarLinks",
            "aria-controls": "navbarLinks",
          }}
        >
          <UiIcon type="solid" name="bars" />
        </Button>
      </Li>
    </Ul>
  </nav>
</header>
<ModuleCart />
<ModuleCartOrder />
<ModuleAuthLogin
  bind:idName={modal}
  bind:formData={userData}
  bind:form={loginForm}
/>
<ModuleAuthRegister
  bind:idName={modalR}
  bind:formData={regisData}
  bind:form={registerForm}
  {formType}
/>
