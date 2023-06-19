<script>
  import { Container, Row, Col, Div } from "$lib/component/container";
  import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
  } from "$lib/component/modal";
  // import UiHr from '$lib/component/ui/hr.svelte';
  // import UiIcon from '$lib/component/ui/icon.svelte';
  // import TextFormat from '$lib/component/header/textformat.svelte';
  import Header from "$lib/component/header/header.svelte";
  import { Link, Button, Input, Label } from "$lib/component/form";

  export let idName, formData, form, formType;

  let formTitle,
    btnLabel = "Register",
    btnType = "primary";

  const submitRegister = () => {
    formData = new FormData(form);

    formData = Object.fromEntries(formData.entries());
    // console.log(formData);
    // register.set(regisData);

    // loginForm.reset();
    // idName.hide();
  };
  $: {
    console.log(formType);
    if (formType == "add") {
      formTitle = "Registration Form";
      btnLabel = "Register";
      btnType = "primary";
    } else {
      formTitle = "Update information";
      btnLabel = "Update";
      btnType = "warning";
    }
  }
</script>

<Modal
  bind:idName
  className={"modal-dialog-scrollable modal-dialog-centered modal-lg"}
>
  <form on:submit|preventDefault={submitRegister} bind:this={form}>
    <ModalContent>
      <ModalHeader>{formTitle}</ModalHeader>
      <ModalBody>
        <Container>
          <Row>
            <Header header={"h4"} className={"h6 text-secondary"}
              >Personal Information</Header
            >
            <Col className={"col-6"}>
              <Div className={"form-floating mb-3"}>
                <Input
                  idName={"floatingLastname"}
                  placeholder={"Fastname"}
                  name={"lastname"}
                />
                <Label forLabel={"floatingLastname"}>Lastname</Label>
              </Div>
            </Col>
            <Col className={"col-6"}>
              <Div className={"form-floating mb-3"}>
                <Input
                  idName={"floatingFirstname"}
                  placeholder={"Firstname"}
                  name={"firstname"}
                />
                <Label forLabel={"floatingFirstname"}>Firstname</Label>
              </Div>
            </Col>
            <Col className={"col-6"}>
              <Div className={"form-floating mb-3"}>
                <Input
                  idName={"floatingMiddle"}
                  placeholder={"Middle"}
                  name={"middlename"}
                />
                <Label forLabel={"floatingMiddle"}>Middle</Label>
              </Div>
            </Col>
            <Col className={"col-6"}>
              <Div className={"form-floating mb-3"}>
                <Input
                  type={"number"}
                  idName={"floatingContact"}
                  placeholder={"Contact"}
                  name={"contact"}
                />
                <Label forLabel={"floatingContact"}>Contact</Label>
              </Div>
            </Col>
            <Col className={"col-12"}>
              <Div className={"form-floating mb-3"}>
                <Input
                  type={"email"}
                  idName={"floatingContact"}
                  placeholder={"Email Address"}
                  name={"email"}
                />
                <Label forLabel={"floatingContact"}>Email Address</Label>
              </Div>
            </Col>
            <Header header={"h4"} className={"h6 text-secondary"}
              >Account Information</Header
            >
            <Col className={"col-12"}>
              <Div className={"form-floating mb-3"}>
                <Input
                  idName={"floatingUsername"}
                  placeholder={"Username"}
                  name={"username"}
                />
                <Label forLabel={"floatingUsername"}>Username</Label>
              </Div>
            </Col>
            <Col className={"col-6"}>
              <Div className={"form-floating mb-3"}>
                <Input
                  type={"password"}
                  idName={"floatingPassword"}
                  placeholder={"Password"}
                  name={"password"}
                />
                <Label forLabel={"floatingPassword"}>Password</Label>
              </Div>
            </Col>
            <Col className={"col-6"}>
              <Div className={"form-floating mb-3"}>
                <Input
                  type={"password"}
                  idName={"floatingConfirmPassword"}
                  placeholder={"ConfirmPassword"}
                  name={"confirnmPassword"}
                />
                <Label forLabel={"floatingConfirmPassword"}
                  >Confirm Password</Label
                >
              </Div>
            </Col>
          </Row>
          <Div className="mt-3">
            <Button className={"btn btn-" + btnType} style={"width: 150px;"}
              >{btnLabel}</Button
            >
          </Div>
        </Container>
      </ModalBody>
    </ModalContent>
  </form>
</Modal>
