const hire = (fullName) => {
  const email = fullName.split(' ').join('_')
  return { fullName, 
    email: `${email}@trybe.com`};
}
const newEmployees = (hire) => {

}

console.log(hire('jao'))