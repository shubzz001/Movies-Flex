// import React from 'react';

// const Footer = () => (
//     <footer className="footer">
//         <p>&copy; 2025 Movie Flex. All Rights Reserved.</p>
//     </footer>
// );

// export default Footer;

import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => (
    <Box
        component="footer"
        sx={{
            backgroundColor: 'background.paper',
            padding: '1rem 0',
            boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.1)',
            position: 'relative',
            bottom: 0,
            width: '100%',
        }}
    >
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary">
                &copy; 2025 Movie Flex. All Rights Reserved.
            </Typography>
        </Container>
    </Box>
);

export default Footer;
