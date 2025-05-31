"use client";

import { useDispatch, useSelector } from "react-redux";
import {
  NavigationContainer,
  LogoContainer,
  LogoImage,
  NavLinkDisabled,
  NavLinksLeft,
  NavLink,
  NavLinksRight,
} from "./platform-navigation-bar.styles";
import PropTypes from "prop-types";
import { selectCurrentUser } from "@/store/user/user.selector";
import { signOut } from "@/store/user/user.thunk";
import { usePathname } from "next/navigation";
import CustomNavLink from "@/components/utility/nav-links/nav-link.util.component";

/**
 * A minimal navigation bar for the single "Coming Soon" landing page.
 * All links are intentionally disabled (greyed‑out) until the full site launches.
 *
 * Props:
 * - logoUrl (string)  URL of the site logo asset
 * - name    (string)  Accessible alt‑text for the logo (e.g., brand name)
 */
const PlatformNavigationBar = ({ logoUrl, name }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const pathname = usePathname();
  const handleSignOut = () => {
    dispatch(signOut());
  };
  return (
    <NavigationContainer>
      <NavLinksLeft>
        <NavLink href={`/coming-soon`}>HOME</NavLink>
        <CustomNavLink href={`/shop/products`} disabled>
          PRODUCTS
        </CustomNavLink>
      </NavLinksLeft>

      <LogoContainer href="/coming-soon">
        {logoUrl && (
          <LogoImage
            src={logoUrl}
            alt={`${name} logo`}
            width={100}
            height={100}
            priority
          />
        )}
      </LogoContainer>

      <NavLinksRight>
        {currentUser ? (
          <>
            <NavLink href={`/profile`}>PROFILE</NavLink>
            <NavLink as="span" onClick={handleSignOut}>
              SIGN-OUT
            </NavLink>
          </>
        ) : (
          <NavLink href={`/auth?redirect=${encodeURIComponent(pathname)}`}>
            SIGN-IN
          </NavLink>
        )}
      </NavLinksRight>
    </NavigationContainer>
  );
};

PlatformNavigationBar.propTypes = {
  logoUrl: PropTypes.string,
  name: PropTypes.string,
};

export default PlatformNavigationBar;
