import { FormComponent } from "../formComponent/FormComponent.jsx";
import { FormContent } from "../formComponent/FormContent.jsx";

export default function HomePageContent() {
  return (
    <FormComponent>
      <FormContent
        inputs={[
          {
            name: "Email",
            type: "email",
            placeholder: "example@email.com",
          },
          {
            name: "Password",
            type: "password",
            placeholder: "******",
          },
        ]}
        typeForm={"login"}
      />
    </FormComponent>
  );
}
