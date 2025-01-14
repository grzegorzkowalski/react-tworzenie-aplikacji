interface IAvatar {
  id: number,
  title: string,
  name: string,
  surname: string,
  pesel: number,
  bio: string,
  avatar: string
}

const users: IAvatar[]  = [
  {
    id: 1,
    title: "Mrs.",
    name: "Sonya",
    surname: "Smith",
    pesel: 66111626126,
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla, diam non tempus vulputate, tellus massa viverra diam, eget scelerisque ipsum ipsum vel sem.",
    avatar: "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100270.jpg"
  },
  {
    id: 2,
    title: "Mr.",
    name: "Charles",
    surname: "Willard",
    pesel: 53052334461,
    bio:
      "Nullam in dignissim nibh. Sed lorem arcu, consectetur vel posuere quis, cursus sit amet massa. In eleifend ut urna in sodales. Vestibulum viverra lectus in efficitur ultricies.",
    avatar: "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100270.jpg"
  },
  {
    id: 3,
    title: "Ms.",
    name: "Tina",
    surname: "Robinson",
    pesel: 67032584953,
    bio:
      "Phasellus euismod leo non lacus congue dapibus. Curabitur iaculis faucibus euismod. Vestibulum sem metus, congue at lacinia eget, suscipit at nunc.",
    avatar: "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100270.jpg"
  }
];
