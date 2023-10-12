import { Stack } from '@mui/material'
import { categories } from '../utils/constants'

const SideBar = ({ selectedCategory, setSelectedCategory}) =>
   (
    <Stack 
      direction="row"
      sx={{
        overflowY: 'auto',
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' },
      }}
    >
    { categories.map((category) => (
      <button className='category-btn'
       onClick={() => setSelectedCategory(category.name)}
       style={{background: category.name === selectedCategory && '#fc1503', color: 'white'
      }}
      key={category.name}
      >
        <span>{category.icon}</span>
        <span>{category.name}</span>
      </button>
    ))}
    </Stack>
  )


export default SideBar