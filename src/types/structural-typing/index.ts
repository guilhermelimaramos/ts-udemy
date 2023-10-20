type VerifyUserFn = (user: User, sentValue: User) => boolean;

type User = {
  username: string;
  password: string;
};

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser: User = {
  username: 'joao',
  password: '123456',
};

const sentUser: User = {
  username: 'joao',
  password: '123456',
};

const loggedIn = verifyUser(bdUser, sentUser);

if (loggedIn) console.log('Logged-in user');
if (!loggedIn) console.log('Invalid user!');
