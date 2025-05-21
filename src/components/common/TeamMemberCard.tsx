import type { TeamMember } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <Card className="bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden text-center">
      <CardHeader className="p-0">
        <div className="relative w-full h-72">
          <Image
            src={member.imageUrl}
            alt={member.name}
            layout="fill"
            objectFit="cover"
            className=""
            data-ai-hint={member.dataAiHint || "portrait photo"}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-2xl font-serif text-primary mb-1">{member.name}</CardTitle>
        <CardDescription className="text-accent font-semibold mb-3">{member.role}</CardDescription>
        <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
        {member.socialLinks && member.socialLinks.length > 0 && (
          <div className="flex justify-center space-x-3">
            {member.socialLinks.map((link) => (
              <Link key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.platform} className="text-primary hover:text-accent transition-colors">
                {link.icon && <link.icon className="h-6 w-6" />}
              </Link>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
