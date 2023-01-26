import { LoginForm } from 'components/Login/LoginForm';
import { PageBox } from 'components/PageBox/PageBox';

export default function Login() {
  return (
    <PageBox>
      <p style={{ fontSize: 30, marginBottom: 30 }}>Login</p>
      <LoginForm />
    </PageBox>
  );
}
