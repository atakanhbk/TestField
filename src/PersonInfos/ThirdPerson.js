function ThirdPerson({ info }) {
  const thirdPersonInfo = {
    name: "Levi",
    surname: "Ackerman",
  };

  const addPersonToList = () => {
    info(thirdPersonInfo);
  };
  return (
    <div>
      <h1>
        {thirdPersonInfo.name} {thirdPersonInfo.surname}
      </h1>
      <button onClick={addPersonToList}>Add This Person To List</button>
    </div>
  );
}

export default ThirdPerson;
