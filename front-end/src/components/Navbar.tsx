import '@radix-ui/themes/styles.css';
import {Flex, Button, Link, Checkbox, Switch } from '@radix-ui/themes';



export default function Navbar() {
    return (
        <Flex align="center" gap="4" wrap="wrap">
        <Flex align="center" gap="3" wrap="wrap">
            <Button>Button</Button>
            <Button asChild>
            <a href="#">Link</a>
            </Button>
        </Flex>
        <Button variant="ghost">Ghost button</Button>
        <Link href="#" size="2">
            Link
        </Link>
        <Checkbox defaultChecked />
        <Switch defaultChecked />
        <Switch defaultChecked disabled />
        </Flex>
    );
};