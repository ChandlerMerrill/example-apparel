import Link from "next/link";
import { NavLinkDisabled, StyledNavLink } from "./nav-link.util.styles";

export default function CustomNavLink({ href, children, disabled = false }) {
  if (disabled) {
    return <NavLinkDisabled>{children}</NavLinkDisabled>;
  }

  return (
    <Link href={href} passHref legacyBehavior>
      <StyledNavLink>{children}</StyledNavLink>
    </Link>
  );
}
