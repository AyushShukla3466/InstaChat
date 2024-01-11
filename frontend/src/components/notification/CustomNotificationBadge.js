import { Badge } from '@chakra-ui/react';

function CustomNotificationBadge({ count }) {
    return (
        <Badge
            borderRadius="full"
            px="2"
            bg="red.500" // or your preferred color
            color="white"
            position="absolute"
            top="-1"
            right="-1"
            transform="scale(1)"
            transition="transform 0.2s ease-in-out"
            transformOrigin="bottom right"
        >
            {count}
        </Badge>
    );
}

export default CustomNotificationBadge;
