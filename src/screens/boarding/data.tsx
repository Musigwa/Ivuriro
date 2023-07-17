import img1 from '../../assets/images/1.png';
import img2 from '../../assets/images/2.png';
import img3 from '../../assets/images/3.png';

export type DataType = {
  imageUri: number;
  heading: string;
  key: string;
  color: string;
};

export default [
  {
    imageUri: img1,
    heading: 'Consult only with the doctor you trust.',
    // description: 'A bold statement tuned to perfection.',
    key: 'first',
    color: '#db9efa',
  },
  {
    imageUri: img2,
    heading: 'Find a lot of specialists in one place.',
    // description:
    //   'An Urbanears classic! Listen-all-day fit. Striking the perfect balance of effortless technology',
    key: 'second',
    color: '#999',
  },
  {
    imageUri: img3,
    heading: 'Connect with them through our online consultation.',
    // description: 'The “Plattan” in Plattan headphones is Swedish for “the slab.”',
    key: 'third',
    color: '#a1e3a1',
  },
];
