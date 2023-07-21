import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";
import { FormData } from "./route";

export default function ContactTemplate({
  nombres,
  apellidos,
  telefono,
  email,
  message,
}: FormData) {
  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
          <Text style={heading}>Hola, estos son los datos de contacto.</Text>
          <Text style={paragraph}>Nombres: {nombres}</Text>
          <Text style={paragraph}>Apellidos: {apellidos}</Text>
          <Text style={paragraph}>Telefono: {telefono}</Text>
          <Text style={paragraph}>Email: {email}</Text>
          <Text style={paragraph}>Message: {message}</Text>
        </Container>
      </Section>
    </Html>
  );
}

// Styles for the email template
const main = {
  backgroundColor: "#ffffff",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};
