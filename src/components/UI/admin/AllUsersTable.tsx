import { Avatar, Button, Chip, Stack, Typography } from "@mui/material";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import CustomTable from "../../shared/CustomTable/CustomTable";
import {
   useGetAllUsersQuery,
   useUpdateUserRoleMutation,
   useUpdateUserStatusMutation,
} from "../../../redux/api/userApi";
import { toast } from "sonner";
import { isRtqQueryError } from "../../../redux/api/baseApi";
import { Link } from "react-router-dom";
import Loading from "../../shared/Loading/Loading";

const AllUsersTable = () => {
   const { data } = useGetAllUsersQuery(undefined);

   const [
      updateUserRole,
      {
         data: updateRoleData,
         error: updateRoleError,
         isLoading: updateRoleIsLoading,
      },
   ] = useUpdateUserRoleMutation();
   const [
      updateUserStatus,
      {
         data: updateStatusData,
         error: updateStatusError,
         isLoading: updateStatusIsLoading,
      },
   ] = useUpdateUserStatusMutation();

   React.useEffect(() => {
      if (updateRoleData) {
         toast.success(updateRoleData.message);
      }
      if (isRtqQueryError(updateRoleError)) {
         toast.error(updateRoleError.data.message);
      }

      if (updateStatusData) {
         toast.success(updateStatusData.message);
      }
      if (isRtqQueryError(updateStatusError)) {
         toast.error(updateStatusError.data.message);
      }
   }, [updateRoleData, updateRoleError, updateStatusData, updateStatusError]);

   const columns = [
      { id: "person", label: "Person" },
      { id: "status", label: "Status" },
      { id: "role", label: "Role" },
      { id: "action", label: "Action" },
   ];

   const tableData = data?.data?.map((item) => ({
      person: (
         <Stack
            direction="row"
            alignItems="center"
            gap={1}
         >
            <Avatar
               alt={item.name}
               src={item.profileImg}
               sx={{ width: 56, height: 56 }}
            />
            <Stack>
               <Typography
                  variant="body1"
                  component="p"
                  fontWeight={600}
               >
                  {item.name}
               </Typography>
               <Typography
                  variant="body2"
                  component="p"
               >
                  {item.email}
               </Typography>
            </Stack>
         </Stack>
      ),
      status:
         item.status === "unblock" ? (
            <Chip
               label={item.status}
               color="info"
            />
         ) : (
            <Chip
               label={item.status}
               color="warning"
            />
         ),
      role:
         item.role === "admin" ? (
            <Chip
               label={item.role}
               color="primary"
            />
         ) : item.role === "instructor" ? (
            <Chip
               label={item.role}
               color="info"
            />
         ) : (
            <Chip
               label={item.role}
               color="default"
            />
         ),
      action: (
         <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            gap={2}
         >
            {/* role */}
            <PopupState
               variant="popover"
               popupId="demo-popup-menu"
            >
               {(popupState) => (
                  <React.Fragment>
                     <Button
                        size="small"
                        color="warning"
                        {...bindTrigger(popupState)}
                        disabled={updateRoleIsLoading}
                     >
                        Edit Role
                     </Button>
                     <Menu {...bindMenu(popupState)}>
                        <MenuItem
                           onClick={() => {
                              updateUserRole({
                                 userId: item._id,
                                 role: "admin",
                              });
                              popupState.close();
                           }}
                        >
                           Admin
                        </MenuItem>
                        <MenuItem
                           onClick={() => {
                              updateUserRole({
                                 userId: item._id,
                                 role: "instructor",
                              });
                              popupState.close();
                           }}
                        >
                           Instructor
                        </MenuItem>
                        <MenuItem
                           onClick={() => {
                              updateUserRole({
                                 userId: item._id,
                                 role: "student",
                              });
                              popupState.close();
                           }}
                        >
                           Student
                        </MenuItem>
                     </Menu>
                  </React.Fragment>
               )}
            </PopupState>

            {/* status */}
            <PopupState
               variant="popover"
               popupId="demo-popup-menu"
            >
               {(popupState) => (
                  <React.Fragment>
                     <Button
                        size="small"
                        color="warning"
                        {...bindTrigger(popupState)}
                        disabled={updateStatusIsLoading}
                     >
                        Edit Status
                     </Button>
                     <Menu {...bindMenu(popupState)}>
                        <MenuItem
                           onClick={() => {
                              updateUserStatus({
                                 userId: item._id,
                                 status: "unblock",
                              });
                              popupState.close();
                           }}
                        >
                           unblock
                        </MenuItem>
                        <MenuItem
                           onClick={() => {
                              updateUserStatus({
                                 userId: item._id,
                                 status: "blocked",
                              });
                              popupState.close();
                           }}
                        >
                           blocked
                        </MenuItem>
                     </Menu>
                  </React.Fragment>
               )}
            </PopupState>
            {/* user details */}
            <Link to={`/user-details/${item._id}`}>
               <Button>Details</Button>
            </Link>
         </Stack>
      ),
   }));

   return (
      <div>
         <h2>All Users</h2>
         {tableData ? (
            <CustomTable
               columns={columns}
               data={tableData}
               align="center"
            />
         ) : (
            <Loading />
         )}
      </div>
   );
};
export default AllUsersTable;
