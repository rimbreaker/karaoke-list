import { useMantineColorScheme, Switch } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';

export function ColorSchemeToggle() {
  const { toggleColorScheme, } = useMantineColorScheme();
  const scheme = useColorScheme()

  return (
    <Switch size="md"
      color="dark.4"
      onLabel={<h1>☀</h1>}
      offLabel={<h1>🌙</h1>}
      onChange={toggleColorScheme}
      defaultChecked={scheme == "dark"}
    />
  );
}