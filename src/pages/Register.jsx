import { PageBox } from 'components/PageBox/PageBox';
import { RegisterForm } from 'components/Register/RegisterForm';

export default function Register() {
  return (
    <PageBox>
      <p style={{ fontSize: 30, marginBottom: 30 }}>Register</p>
      <RegisterForm />
    </PageBox>
  );
}
