<script>
  import { onMount } from "svelte";
  import { Container, Row, Col, Div } from "$lib/component/container";
  import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
  } from "$lib/component/modal";
  import UiHr from "$lib/component/ui/hr.svelte";
  import UiIcon from "$lib/component/ui/icon.svelte";
  import TextFormat from "$lib/component/header/textformat.svelte";
  import { Link, Button, Input, Label } from "$lib/component/form";
  import { login, loader, error } from "$lib/module/auth/store.js";

  export let idName, formData, form;

  const submitLogin = () => {
    formData = new FormData(form);

    formData = Object.fromEntries(formData.entries());
    console.log(formData);
    // register.set(regisData);

    // loginForm.reset();
    // idName.hide();
  };
</script>

<Modal bind:idName>
  
    <ModalContent>
      <form on:submit|preventDefault={submitLogin} bind:this={form}>
      <ModalHeader>Login</ModalHeader>
      <ModalBody>
        <Container>
          <Div className={"d-flex flex-column mb-3"}>
            <Div className={"form-floating mb-3"}>
              <Input
                idName={"floatingUsername"}
                placeholder={"username"}
                name={"username"}
              />
              <Label forLabel={"floatingUsername"}>Username</Label>
            </Div>
            <Div className={"form-floating"}>
              <Input
                type={"password"}
                idName={"floatingPassword"}
                placeholder={"password"}
                name={"password"}
              />
              <Label forLabel={"floatingPassword"}>Password</Label>
            </Div>
          </Div>
        </Container>
      </ModalBody>
      <ModalFooter>
        <Div className={"d-flex justify-content-end"}>
          <Button className={"btn btn-primary py-2"}>LOGIN</Button>
        </Div>
      </ModalFooter>
    </form>
    </ModalContent>
</Modal>
