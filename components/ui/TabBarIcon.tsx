import { MaterialIcons } from '@expo/vector-icons';

type IconName = 'home' | 'list' | 'chat' | 'person';

export function TabBarIcon({ 
  name, 
  color 
}: { 
  name: IconName; 
  color: string;
}) {
  return <MaterialIcons size={28} name={name} color={color} />;
} 