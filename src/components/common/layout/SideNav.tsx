import { Box, Divider, Group, NavLink, NavLinkProps } from "@mantine/core"
import { sideMenuConfig } from "app/config/navigation/sideMenuConfig"
import { r } from "app/router"
import { useAuth } from "app/store"
import { Fragment } from "react"
import { Link, To } from "react-router-dom"
import { PERMISSION_GLOBAL_ADMIN } from "../../../app/config/permissions"

export const SideNav = () => {
  const userRoles = useAuth((state) => state.roles)

  return (
    <Box>
      {sideMenuConfig
        .filter(({ permissions }) =>
          !permissions || userRoles?.includes(PERMISSION_GLOBAL_ADMIN) || (userRoles && permissions.some((role) => userRoles.includes(role)))
        )
        .map(({ type, label, value, icon: Icon, nestedItems, ...props }, index) =>
          type === 'item' ? (
            <Fragment key={`${index}-${label}`}>
              {!!value ? (
                <NavLink
                  label={label}
                  component={Link}
                  to={{
                    // pathname: "/app",
                    search: `?category=${value}`,
                  }}
                  icon={Icon && <Icon size={16} />}
                  className={`rounded-sm`}
                  {...props as NavLinkProps}
                />
              ) : (
                <NavLink
                  label={label}
                  component="div"
                  icon={Icon && <Icon size={16} />}
                  className={`rounded-sm hover:!bg-transparent !cursor-default font-bold`}
                  {...props as NavLinkProps}
                />
              )}
            </Fragment>
          ) : type === 'divider' ? (
            <Divider my={10} key={index} />
          ) : null)}
    </Box>
  )
}