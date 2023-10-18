import usePersistLogin from 'auth/UsePersist';

const PersistLoginComponent = () => {
  const { username } = usePersistLogin;
  console.log("isLoading", username)
  return (
    <div>PersistLoginComponent</div>
  )
}

export default PersistLoginComponent